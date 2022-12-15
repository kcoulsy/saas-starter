import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';
import i18n from '@src/utils/i18n';

i18n.init();

expect.extend(matchers);
