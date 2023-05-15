import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import App from '../App.vue';

describe('App', () => {
    it('adds a new todo', async () => {
      const wrapper = mount(App);
  
      // Find the input field and set a value
      const input = wrapper.find('input');
      await input.setValue('New Todo');
  
      // Trigger the Enter key event
      await input.trigger('keydown.enter');
  
      // Check if the new todo is added
      const todoItems = wrapper.findAll('.todoName');
      expect(todoItems.length).toBe(1);
      expect(todoItems[0].text()).toBe('New Todo');
    });
  });
  