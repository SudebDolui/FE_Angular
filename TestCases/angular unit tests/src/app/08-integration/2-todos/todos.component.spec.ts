import {
	fakeAsync,
	tick,
	ComponentFixture,
	TestBed,
	waitForAsync
} from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';


class MockTodoService{
	add(todo) {
		return of({});
	}

	getTodos() {
		return of({});
	}

	getTodosPromise() {
		return Promise.resolve([1, 2, 3]);
	}

	delete(id) { of(null) }
		
}

const MockTodoAsFactory = () => ({
	add: (todo) => of({}),
	getTodos: () => of({}),
	getTodosPromise: () => Promise.resolve([1, 2, 3]),
	delete: (id) => of(null)
})

const MockTodoAsValue = {
	add: (todo) => of({}),
	getTodos: () => of({}),
	getTodosPromise: () => Promise.resolve([1, 2, 3]),
	delete: (id) => of(null)
}

describe('TodosComponent', () => {
	let component: TodosComponent;
	let fixture: ComponentFixture<TodosComponent>;

	beforeEach(
		waitForAsync(() => {
			TestBed.configureTestingModule({
				// imports: [HttpClientModule],
				declarations: [TodosComponent],
				providers: [
					{provide: TodoService, useValue: MockTodoAsValue}
				]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(TodosComponent);
		component = fixture.componentInstance;
		// fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	// FOR OBSERVABLE
	/*it('should load todos from the server', () => {
		const service = TestBed.inject(TodoService);
		// fixture.debugElement.injector.get(TodoService); // - for cases when dependencies aren't provided
		spyOn(service, 'getTodos').and.returnValue(of([1, 2, 3]));

		fixture.detectChanges();

		expect(component.todos.length).toBe(3);
	});*/
	// FOR PROMISE
	it('should load todos from the server', fakeAsync(/*async*/ () => {
		const service = TestBed.inject(TodoService);
		// fixture.debugElement.injector.get(TodoService); // - for cases when dependencies aren't provided
		// spyOn(service, 'getTodosPromise').and.returnValue(
		// 	Promise.resolve([1, 2, 3])
		// );

		fixture.detectChanges();

		// WITH ASYNC
		// fixture.whenStable().then(() => expect(component.todos.length).toBe(3));
		// WITH FAKEASYNC
		tick();

		expect(component.todos.length).toBe(3);
	}));
});
