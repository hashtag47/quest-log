import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameCardNoButtons from "./GameCardNoButtons";

const game = {
  title: "Risk of Rain 2",
  poster: "ror2.jpg",
  rating: 5,
  trophiesUnlocked: 12,
};

test("shows the game's title, rating and trophies", () => {
  render(<GameCardNoButtons game={game} onClick={() => {}} />);

  expect(screen.getByText("Risk of Rain 2")).toBeInTheDocument();
  expect(screen.getByText(/Rating: 5\/5/)).toBeInTheDocument();
  expect(screen.getByText("12 Trophies")).toBeInTheDocument();
  expect(screen.getByAltText("Risk of Rain 2 Poster")).toBeInTheDocument();
});

test("shows 0 trophies when none are unlocked", () => {
  render(
    <GameCardNoButtons
      game={{ ...game, trophiesUnlocked: undefined }}
      onClick={() => {}}
    />
  );

  expect(screen.getByText("0 Trophies")).toBeInTheDocument();
});

test("calls onClick when the card is clicked", () => {
  const handleClick = jest.fn();
  render(<GameCardNoButtons game={game} onClick={handleClick} />);

  userEvent.click(screen.getByText("Risk of Rain 2"));

  expect(handleClick).toHaveBeenCalledTimes(1);
});
