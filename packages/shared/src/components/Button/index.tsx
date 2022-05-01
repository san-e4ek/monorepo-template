import { FC } from 'react';

import { IButtonProps } from './interfaces';

export const Button: FC<IButtonProps> = () => <button onClick={() => console.log('click')}>click</button>;
