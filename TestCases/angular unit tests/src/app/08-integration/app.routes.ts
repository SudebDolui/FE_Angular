import { HomeComponent } from './home/home.component';
import { TodosComponent } from './2-todos/todos.component';
import { UserDetailsComponent } from './3-user-details/user-details.component';
import { UsersComponent } from './users/users.component';

export const routes = [
	{ path: 'users/:id', component: UserDetailsComponent },
	{ path: 'todos', component: TodosComponent },
	{ path: 'users', component: UsersComponent },
	{ path: '', component: HomeComponent }
];
