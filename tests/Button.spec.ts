import { render } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import { axe, toHaveNoViolations } from 'jest-axe'
import Button from '../src/components/Button/index.vue'

expect.extend(toHaveNoViolations)

describe('Button.vue', () => {
  it('renders correctly and passes accessibility checks', async () => {
    const { container } = render(Button, { props: { variant: 'primary' }, slots: { default: 'Click me' } });
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
