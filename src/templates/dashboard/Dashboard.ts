import { Icon } from '@icon-park/vue-next/lib/runtime';

import { NewsData, WeatherDataCurrent } from '../../api/types';

export interface MenuItem {
  topic: string;
  icon: Icon;
  header?: string;
  bgColor: string;
}

export interface ApiData {
  weather?: WeatherDataCurrent;
  news?: NewsData;
}