import json

from dataclasses import asdict, dataclass
from typing import Literal
from pathlib import Path

from sentence_transformers import SentenceTransformer
from sympy import pprint
from torch import embedding


@dataclass
class EmbedItem:
    text: str
    id: str
    lang: Literal["en", "pt"]


QA_PATH = Path(__file__).parent.parent / "src" / "data" / "qa.json"
OUT_PATH = Path(__file__).parent.parent / "src" / "assets" / "embeddings.json"


def load_items():

    entries = json.loads(QA_PATH.read_text())["qa"]

    return [
        EmbedItem(text=text, id=entry["id"], lang=lang)
        for entry in entries
        for lang, phrases in entry["questions"].items()
        for text in phrases
    ]


if __name__ == "__main__":
    load = load_items()
    model = SentenceTransformer(
        "paraphrase-multilingual-MiniLM-L12-v2"
    )  # 384 numbers per embedding
    print("Encoding...")
    embeddings = model.encode([item.text for item in load], show_progress_bar=True)
    print("Saving...")
    OUT_PATH.parent.mkdir(parents=True, exist_ok=True)

    items = [
        {
            "text": item.text,
            "id": item.id,
            "lang": item.lang,
            "embedding": embedding.tolist(),
        }
        for item, embedding in zip(load, embeddings)
    ]
    OUT_PATH.write_text(json.dumps(items, indent=4, ensure_ascii=False))
