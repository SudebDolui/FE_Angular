import { HttpClient, HttpClientModule } from "@angular/common/http";
import { waitForAsync, TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { TodoService } from "./todo.service";

describe("TodosComponent", () => {
  let service: TodoService;
  let http: HttpClient;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientModule],
        providers: [TodoService, { provide: HttpClient }],
      }).compileComponents();
      service = TestBed.inject(TodoService);
      http = TestBed.inject(HttpClient);
    })
  );

  it("should initialize", () => {
    expect(service).toBeDefined();
  });

  it("should get todos", () => {
    spyOn(http, 'get').and.returnValue(of({}));
    service.getTodos().subscribe((todos) => {
      expect(todos).toBeTruthy();
    });
  });
});
