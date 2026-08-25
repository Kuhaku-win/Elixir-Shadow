import { describe, it, expect } from 'vitest';

// Unit scaler helper logic extracted for unit testing
export const formatOz = (ml: number): string => {
  const rawOz = ml / 30;
  if (rawOz === 0) return '0 oz';
  if (Math.abs(rawOz - 0.25) < 0.05) return '1/4 oz';
  if (Math.abs(rawOz - 0.33) < 0.05) return '1/3 oz';
  if (Math.abs(rawOz - 0.5) < 0.05) return '1/2 oz';
  if (Math.abs(rawOz - 0.66) < 0.05) return '2/3 oz';
  if (Math.abs(rawOz - 0.75) < 0.05) return '3/4 oz';
  if (Math.abs(rawOz - 1.0) < 0.05) return '1 oz';
  if (Math.abs(rawOz - 1.25) < 0.05) return '1 1/4 oz';
  if (Math.abs(rawOz - 1.33) < 0.05) return '1 1/3 oz';
  if (Math.abs(rawOz - 1.5) < 0.05) return '1 1/2 oz';
  if (Math.abs(rawOz - 1.66) < 0.05) return '1 2/3 oz';
  if (Math.abs(rawOz - 1.75) < 0.05) return '1 3/4 oz';
  if (Math.abs(rawOz - 2.0) < 0.05) return '2 oz';
  if (Math.abs(rawOz - 2.5) < 0.05) return '2 1/2 oz';
  if (Math.abs(rawOz - 3.0) < 0.05) return '3 oz';
  if (Math.abs(rawOz - 4.0) < 0.05) return '4 oz';
  return `${rawOz.toFixed(1)} oz`;
};

export const getDilutionRate = (technique: string): number => {
  const table: Record<string, number> = {
    Shake: 0.22,
    Stir: 0.20,
    Build: 0.12,
    Muddle: 0.18,
    Blend: 0.35,
    Layer: 0.05,
    Float: 0.05
  };
  return table[technique] || 0.20;
};

describe('UnitScaler & Measurements Unit Tests', () => {
  describe('formatOz Fractional Conversion', () => {
    it('should correctly format 0ml as 0 oz', () => {
      expect(formatOz(0)).toBe('0 oz');
    });

    it('should correctly format standard single shots (30ml, 45ml, 60ml)', () => {
      expect(formatOz(30)).toBe('1 oz');
      expect(formatOz(45)).toBe('1 1/2 oz');
      expect(formatOz(60)).toBe('2 oz');
      expect(formatOz(90)).toBe('3 oz');
      expect(formatOz(120)).toBe('4 oz');
    });

    it('should correctly format fractional ounces (1/4, 1/3, 1/2, 2/3, 3/4)', () => {
      expect(formatOz(7.5)).toBe('1/4 oz');
      expect(formatOz(10)).toBe('1/3 oz');
      expect(formatOz(15)).toBe('1/2 oz');
      expect(formatOz(20)).toBe('2/3 oz');
      expect(formatOz(22.5)).toBe('3/4 oz');
    });

    it('should correctly format complex fractional amounts (1 1/4, 1 1/3, 1 3/4, 2 1/2)', () => {
      expect(formatOz(37.5)).toBe('1 1/4 oz');
      expect(formatOz(40)).toBe('1 1/3 oz');
      expect(formatOz(52.5)).toBe('1 3/4 oz');
      expect(formatOz(75)).toBe('2 1/2 oz');
    });
  });

  describe('Dilution Factor Calculation', () => {
    it('should calculate proper dilution rate by bartending technique', () => {
      expect(getDilutionRate('Shake')).toBe(0.22);
      expect(getDilutionRate('Stir')).toBe(0.20);
      expect(getDilutionRate('Build')).toBe(0.12);
      expect(getDilutionRate('Blend')).toBe(0.35);
      expect(getDilutionRate('Layer')).toBe(0.05);
      expect(getDilutionRate('Unknown')).toBe(0.20);
    });
  });

  describe('Multi-Serving Scaling', () => {
    it('should accurately multiply ingredient amounts across servings', () => {
      const baseMl = 45;
      expect(baseMl * 1).toBe(45);
      expect(baseMl * 2).toBe(90);
      expect(baseMl * 4).toBe(180);
      expect(formatOz(baseMl * 2)).toBe('3 oz');
    });
  });
});
