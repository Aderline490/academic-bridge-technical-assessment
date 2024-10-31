import { render, screen, } from '@testing-library/react';
import TaskCard from '../components/TaskCard';

const tasks = [{ id: 1, todo: 'This is a test task.', completed: false, userId: 3}];

test('renders TaskCard with task title', () => {
    const mockDeleteTask = jest.fn();
    render(<TaskCard tasks={tasks} onDeleteTask={mockDeleteTask} onEditTask={jest.fn()}/>);
    
    expect(screen.getByText(/Do something nice for someone you care about/i)).toBeInTheDocument();
    expect(screen.getByText(/Memorize a poem./i)).toBeInTheDocument();
});
