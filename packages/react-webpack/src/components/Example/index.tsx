import { FC } from 'react';

import { IExampleComponentProps } from './interfaces';

export const ExampleComponent: FC<IExampleComponentProps> = (props) => {
  const { title = 'Example component' } = props;

  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};
