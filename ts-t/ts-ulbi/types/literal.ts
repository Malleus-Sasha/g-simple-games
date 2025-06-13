type Color = 'red' | 'green' | 'blue';

const color: Color = 'green';

const colorValues = {
  color: 'green',
} as const;

function paint(color: Color) {
  console.log(color);
}

paint(colorValues.color);

interface User {
  readonly id: string;
}

type EventName = 'click' | 'change';
type EventHandler = `on${EventName}`;

type UserId = `user_id_${string}`;
