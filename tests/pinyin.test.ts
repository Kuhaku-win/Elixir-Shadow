import { describe, it, expect } from 'vitest';
import { matchPinyinOrText, getPinyinVariants } from '../src/utils/pinyin';

describe('Pinyin Fuzzy Matching Search Suite', () => {
  it('should extract correct initials and full pinyin', () => {
    const { initials, full } = getPinyinVariants('马天尼');
    expect(initials).toBe('mtn');
    expect(full).toBe('matianni');

    const mgl = getPinyinVariants('玛格丽特');
    expect(mgl.initials).toBe('mglt');
    expect(mgl.full).toBe('magelite');
  });

  it('should match target by initials', () => {
    expect(matchPinyinOrText('马天尼 (Dry Martini)', 'mtn')).toBe(true);
    expect(matchPinyinOrText('玛格丽特', 'mgl')).toBe(true); // substring of mglt
    expect(matchPinyinOrText('尼格罗尼', 'ngl')).toBe(true);
    expect(matchPinyinOrText('自由古巴', 'zygb')).toBe(true);
    expect(matchPinyinOrText('大都会', 'ddh')).toBe(true);
    expect(matchPinyinOrText('雪碧 / 柠檬汽水', 'xb')).toBe(true);
  });

  it('should match target by full pinyin', () => {
    expect(matchPinyinOrText('马天尼', 'matianni')).toBe(true);
    expect(matchPinyinOrText('莫吉托', 'mojituo')).toBe(true);
    expect(matchPinyinOrText('金汤力', 'jintangli')).toBe(true);
  });

  it('should match target by exact text or English', () => {
    expect(matchPinyinOrText('盘尼西林', '盘尼')).toBe(true);
    expect(matchPinyinOrText('Negroni 尼格罗尼', 'negroni')).toBe(true);
  });
});
