# API Gateway

## 프로젝트 개요

이 프로젝트는 Spring Cloud Gateway를 사용하여 API Gateway를 구성하는 예제입니다. API Gateway는 `auth-service`와 `board-service`로 요청을 라우팅합니다.

## 구조

- `ApiGatewayApplication.java`: Spring Boot 애플리케이션의 시작 클래스
- `GatewayConfig.java`: 라우팅 설정 클래스
- `GlobalExceptionHandler.java`: 글로벌 예외 처리기
- `application.yml`: 라우팅 및 설정 파일
- `Dockerfile`: Docker 이미지 빌드를 위한 파일
- `build.gradle`: Gradle 빌드 스크립트
- `settings.gradle`: 프로젝트 설정 파일

## 설정

1. **Gradle 빌드**: `./gradlew build`
2. **애플리케이션 실행**: `./gradlew bootRun`
3. **Docker 이미지 빌드 및 실행**:
    ```bash
    docker build -t api-gateway .
    docker run -p 8080:8080 api-gateway
    ```

## 라이센스

MIT License
