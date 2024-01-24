# -----------------------------------------------------------------------------
#  Build Stage
# -----------------------------------------------------------------------------
FROM golang:1.21-alpine AS builder

WORKDIR /build/

COPY go.mod $WORKDIR/go.mod
COPY go.sum $WORKDIR/go.sum

RUN go mod download

COPY ./ ./

RUN go build -o main

# -----------------------------------------------------------------------------
#  Main Stage
# -----------------------------------------------------------------------------
FROM scratch

WORKDIR /kaihei-api/

COPY --from=builder /build/main ./

CMD ["./main"]
