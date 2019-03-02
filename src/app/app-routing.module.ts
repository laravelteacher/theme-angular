import { UIRouter } from '@uirouter/angular';
import { MainComponent } from './components/main/main.component';

export const Routes: object[] = [{
  name: 'main',
  url: '/',
  component: MainComponent
}];

/** UIRouter Config  */
export function uiRouterConfigFn(router: UIRouter) {
  // If no URL matches, go to the `main` state by default
  router.urlService.rules.otherwise({ state: 'main' });
}