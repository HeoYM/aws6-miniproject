
### Structure
```
miniproject-back/
├── APIgateway/ :8080
│   └── src/
│       └── main/
│           ├── java/
│           │   └── com/
│           │       └── miniproject/
│           │           └── apigateway/
│           │               ├── ApiGatewayApplication.java
│           │               ├── filter/
│           │               │   └── CustomFilter.java
│           │               └── controller/
│           │                   └── GlobalExceptionHandler.java
│           └── resources/
│               ├── application.yml
│               └── static/
│                   └── (static resources, if any)
│
├── AuthService/ :8081
│   └── src/
│       └── main/
│           ├── java/
│           │   └── com/
│           │       └── miniproject/
│           │           └── authservice/
│           │               ├── AuthServiceApplication.java
│           │               ├── config/
│           │               │   └── SecurityConfig.java
│           │               ├── controller/
│           │               │   └── AuthController.java
│           │               └── service/
│           │                   ├── JwtUtil.java
│           │                   └── UserDetailsServiceImpl.java
│           └── resources/
│               ├── application.yml
│               └── static/
│                   └── (static resources, if any)
│
├── UserService/ :8082
│   └── src/
│       └── main/
│           ├── java/
│           │   └── com/
│           │       └── miniproject/
│           │           └── userservice/
│           │               ├── UserServiceApplication.java
│           │               ├── controller/
│           │               │   └── UserController.java
│           │               ├── model/
│           │               │   └── User.java
│           │               └── repository/
│           │                   └── UserRepository.java
│           └── resources/
│               ├── application.yml
│               └── static/
│
├── BoardService/ :8083
│   └── src/
│       └── main/
│           ├── java/
│           │   └── com/
│           │       └── miniproject/
│           │           └── boardservice/
│           │               ├── BoardServiceApplication.java
│           │               ├── controller/
│           │               │   ├── PostController.java
│           │               │   └── CommentController.java
│           │               ├── model/
│           │               │   ├── Post.java
│           │               │   └── Comment.java
│           │               ├── repository/
│           │               │   ├── PostRepository.java
│           │               │   └── CommentRepository.java
│           │               └── service/
│           │                   ├── PostService.java
│           │                   └── CommentService.java
│           └── resources/
│               ├── application.yml
│               └── static/
│                   └── (static resources, if any)
│
└── ...

```

