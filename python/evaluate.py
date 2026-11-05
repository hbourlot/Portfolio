import json
from pathlib import Path

import numpy as np
from sentence_transformers import SentenceTransformer

EMBEDDINGS_PATH = Path(__file__).parent.parent / "src" / "assets" / "embeddings.json"
MODEL_NAME = "paraphrase-multilingual-MiniLM-L12-v2"
THRESHOLD = 0.5

TESTS = [
    ("who am i talking to?", "intro"),
    ("quem é esse cara?", "intro"),
    ("how did you end up programming?", "journey"),
    ("como você começou na programação?", "journey"),
    ("what do you like doing on weekends?", "hobbies"),
    ("você faz muay thai?", "hobbies"),
    ("are you in portugal?", "location"),
    ("você mora em lisboa?", "location"),
    ("can you speak english well?", "languages"),
    ("is 42 a real school?", "what-is-42"),
    ("como é a escola 42?", "what-is-42"),
    ("did you go to university?", "education"),
    ("what are you working on these days?", "specialization"),
    ("have you used neural networks?", "machine-learning"),
    ("list your projects", "projects"),
    ("tell me about the chess game", "transcendence"),
    ("did you write a web server?", "webserv"),
    ("você sabe usar containers?", "inception"),
    ("did you recreate bash?", "minishell"),
    ("tell me about the wolfenstein project", "cub3d"),
    ("what do you know about mutexes?", "philosophers"),
    ("which project do you like most?", "favorite-project"),
    ("what was the toughest bug you fixed?", "hardest-problem"),
    ("can you write sql queries?", "data-pipeline"),
    ("what tools do you use?", "skills"),
    ("is this chatbot using gpt?", "this-site"),
    ("are you hiring-ready?", "open-to-work"),
    ("você está procurando vaga?", "open-to-work"),
    ("what did you do before 42?", "experience"),
    ("do you work well with others?", "teamwork"),
    ("what's your weak point?", "strengths-weaknesses"),
    ("would you work from home?", "work-model"),
    ("why are you the right candidate?", "why-hire"),
    ("what's your linkedin?", "contact"),
    ("qual é seu email?", "contact"),
    # off-topic
    ("what's the weather today?", None),
    ("how do I bake a chocolate cake?", None),
    ("who won the world cup in 2022?", None),
    ("what is the capital of australia?", None),
    ("recommend me a movie", None),
    ("how much is bitcoin worth?", None),
    ("qual é a melhor praia do brasil?", None),
    ("translate hello to japanese", None),
    ("what's 17 times 23?", None),
    ("como faço arroz?", None),
]


def normalize(m):
    return m / np.linalg.norm(m, axis=-1, keepdims=True)


def all_scores(queries, vectors):
    scores = []
    for q in queries:
        row = []
        for v in vectors:
            row.append(np.dot(q, v))
        scores.append(row)
    return scores


def best_match(row):
    best_i = 0
    for i in range(len(row)):
        if row[i] > row[best_i]:
            best_i = i
    return best_i


if __name__ == "__main__":
    index = json.loads(EMBEDDINGS_PATH.read_text())
    ids = [row["id"] for row in index]
    vectors = normalize(np.array([row["embedding"] for row in index]))

    model = SentenceTransformer(MODEL_NAME)
    queries = normalize(model.encode([q for q, _ in TESTS]))

    scores = all_scores(queries, vectors)

    top_ids = []
    top_scores = []
    for row in scores:
        i = best_match(row)
        top_ids.append(ids[i])
        top_scores.append(row[i])

    def predict(threshold):
        return [i if s >= threshold else None for i, s in zip(top_ids, top_scores)]

    for (q, expected), got, s in zip(TESTS, predict(THRESHOLD), top_scores):
        mark = "OK  " if got == expected else "FAIL"
        print(f"{mark} {s:.2f}  {q!r:45} expected={expected}  got={got}")

    print("\nthreshold  accuracy")
    for t in np.arange(0.3, 0.75, 0.05):
        correct = sum(g == e for g, (_, e) in zip(predict(t), TESTS))
        print(f"  {t:.2f}     {correct}/{len(TESTS)}")
