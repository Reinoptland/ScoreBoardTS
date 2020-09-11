import reducers from "../../store/rootreducer";

test("reducers", () => {
  let state;
  state = reducers(
    {
      matches: [
        { id: 1, players: [{ id: 1, name: "Kelley", score: 4 }] },
        { id: 2, players: [{ id: 2, name: "Rein", score: 2 }] },
        { id: 3, players: [{ id: 3, name: "Violeta", score: 3 }] },
      ],
    },
    { type: "INCREMENT_SCORE", payload: { matchId: 1, playerId: 1 } }
  );
  expect(state).toEqual({
    matches: [
      { id: 1, players: [{ id: 1, name: "Kelley", score: 5 }] },
      { id: 2, players: [{ id: 2, name: "Rein", score: 2 }] },
      { id: 3, players: [{ id: 3, name: "Violeta", score: 3 }] },
    ],
  });
});
