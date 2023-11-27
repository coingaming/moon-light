import { Examples } from '@/app/types';
import { getExamples } from '@/utils/getExamples';

export type Action = {
  id: string;
  name: string;
  href: string;
  section?: string;
};

export const useSearchActions = async (): Promise<Action[]> => {
  const examples = await getExamples();

  let actions: Action[] = [
    {
      id: 'homepage',
      name: 'Homepage',
      href: '/',
    },
  ];

  const mapActions = (
    examples: Examples["client"] | Examples["server"],
    type: 'client' | 'server'
  ) => {
    for (const [componentName, value] of Object.entries(examples)) {
      const action = {
        id: `${type}#${componentName}`,
        name: componentName,
        href: `/${type}/${componentName}`,
        section: type
      };
      actions.push(action);

      for (const [exampleName, _v] of Object.entries(value.examples)) {
        const action: Action = {
          id: `${type}#${componentName}#${exampleName}`,
          name: `${componentName} - ${exampleName}`,
          href: `/${type}/${componentName}#${exampleName}`,
          section: type
        };
        actions.push(action);
      }
    }
  }

  mapActions(examples.server, 'server');
  mapActions(examples.client, 'client');

  return actions;

  /*
  const mapNavigation = (tree: any[], parent?: string) => {
    for (const elem of tree) {
      const section = parent || '';
      const action = {
        id: `${section}${elem.name}`,
        name: elem.name,
        perform: () =>
          router.push(
            'href' in elem ? elem.href : getComponent(elem.name).href
          ),
      };
      if (section) {
        actions.push({ ...action, section: section });
      } else {
        actions.push(action);
      }
    }
  };
  */

  // const components = [...component];
  // mapNavigation(navigation);
  // mapNavigation(components, 'components');


};
