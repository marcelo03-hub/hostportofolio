import test from 'node:test';
import assert from 'node:assert/strict';
import { PROJECTS } from '../data/portfolioData';
import {
  clampParallaxOffset,
  filterProjects,
  getAdjacentProject,
  validateContactForm,
} from './portfolioLogic';

test('filterProjects returns all projects for All category', () => {
  const result = filterProjects(PROJECTS, 'All');
  assert.equal(result.length, 4);
});

test('filterProjects narrows down to Editorial projects', () => {
  const result = filterProjects(PROJECTS, 'Editorial');
  assert.equal(result.length, 2);
  assert.deepEqual(
    result.map((p) => p.id),
    ['avenue-co', 'the-journal']
  );
});

test('getAdjacentProject cycles forward and backward cleanly', () => {
  const nextFromLast = getAdjacentProject(PROJECTS, 'fuel-performance', 'next');
  assert.equal(nextFromLast?.id, 'studio-form');

  const prevFromFirst = getAdjacentProject(PROJECTS, 'studio-form', 'prev');
  assert.equal(prevFromFirst?.id, 'fuel-performance');
});

test('validateContactForm rejects empty or malformed input', () => {
  const invalid = validateContactForm({
    name: 'A',
    email: 'invalid-email',
    message: 'Hi',
  });
  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.message);
});

test('validateContactForm accepts well-formed inquiry', () => {
  const valid = validateContactForm({
    name: 'Elena Rostova',
    email: 'elena@journal.design',
    message: 'Looking to collaborate on our upcoming digital editorial redesign.',
  });
  assert.equal(valid.valid, true);
  assert.deepEqual(valid.errors, {});
});

test('clampParallaxOffset bounds progress within range', () => {
  assert.equal(clampParallaxOffset(-0.5, 40), -40);
  assert.equal(clampParallaxOffset(0.5, 40), 0);
  assert.equal(clampParallaxOffset(1.5, 40), 40);
});
