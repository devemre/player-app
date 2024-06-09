FROM amazoncorretto:17

ARG PROFILE=dev
ARG APP_VERSION=1.0.0

WORKDIR /app
COPY target/player-backend-*.jar /app/

EXPOSE 8088

ENV DB_URL=jdbc:postgresql://postgres-player:5432/player_network
ENV ACTIVE_PROFILE=${PROFILE}
ENV JAR_VERSION=${APP_VERSION}

CMD java -jar -Dspring.profiles.active=${ACTIVE_PROFILE} -Dspring.datasource.url=${DB_URL} player-backend-${JAR_VERSION}.jar