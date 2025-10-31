# Hello World Go

This is a simple Hello World application written in Go.

## Overview

This application demonstrates the basic structure of a Go program that prints "Hello, World!" to the console.

## Getting Started

### Prerequisites

- Go installed on your system (version 1.16 or higher recommended)

### Running the Application

```bash
go run main.go
```

Or build and run:

```bash
go build main.go
./main
```

### Expected Output

```
Hello, World!
```

## Code Explanation

The `main.go` file contains:

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

### Key Components

- **package main**: Declares this as the main package (executable program)
- **import "fmt"**: Imports the format package for printing
- **func main()**: The main function - entry point of the Go program
- **fmt.Println()**: Prints text to the console and adds a newline

## Project Structure

- `main.go`: Main source file
- `go.mod`: Go module definition file

## Next Steps

- Add more packages
- Create additional functions
- Add command-line flags
- Add unit tests
- Set up Go modules and dependencies

