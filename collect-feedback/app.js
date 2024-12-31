import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const app = new Hono();

let feedbacks = { 1: 0, 2: 0, 3: 0 };

app.get("/feedbacks/1", (c) => c.text(`Feedback 1: ${feedbacks[1]}`));
app.post("/feedbacks/1", (c) => {
    feedbacks[1]++;
    return c.text("Feedback 1 incremented.");
});

app.get("/feedbacks/2", (c) => c.text(`Feedback 2: ${feedbacks[2]}`));
app.post("/feedbacks/2", (c) => {
    feedbacks[2]++;
    return c.text("Feedback 2 incremented.");
});

app.get("/feedbacks/3", (c) => c.text(`Feedback 3: ${feedbacks[3]}`));
app.post("/feedbacks/3", (c) => {
    feedbacks[3]++;
    return c.text("Feedback 3 incremented.");
});

export default app;
