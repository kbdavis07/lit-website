import { html, TemplateResult } from 'lit';
import '../src/my-app.js';

export default {
  title: 'MyApp',
  component: 'my-app',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  header?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ header, backgroundColor = 'white' }: ArgTypes) => html`
  <my-app style="--my-app-background-color: ${backgroundColor}" .header=${header}></my-app>
`;

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
