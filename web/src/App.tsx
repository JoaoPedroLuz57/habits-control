import { Habit } from './components/Habits';

function App() {
  return (
    <>
      <Habit completed={3} />
      <Habit completed={2} />
      <Habit completed={1} />
    </>
  );
}

export default App;
