/* eslint-disable no-new */

import { Header } from './components/header';
import { Main } from './components/main';
import { Card } from './components/card';
import { Footer } from './components/footer';
import {Menu} from './components/menu';

new Header('#app');
new Main('#app');
new Card('main');
new Menu('#app');
new Footer('#app', 'Pokemon things ®');

