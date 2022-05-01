import { ExampleComponent } from '@components/Example';
import { Button } from '@template/shared';
import { FC } from 'react';

export const App: FC = () => {
  return (
    <div>
      <h1>Hello World!!!</h1>
      <Button />
      <ExampleComponent />
    </div>
  );
};
