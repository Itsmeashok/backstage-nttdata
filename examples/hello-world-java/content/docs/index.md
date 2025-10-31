# Hello World Java

This is a simple Hello World application written in Java.

## Overview

This application demonstrates the basic structure of a Java program that prints "Hello, World!" to the console.

## Getting Started

### Prerequisites

- Java Development Kit (JDK) installed on your system
- Java version 8 or higher recommended

### Compiling the Application

```bash
javac HelloWorld.java
```

This will create a `HelloWorld.class` file (compiled bytecode).

### Running the Application

```bash
java HelloWorld
```

### Expected Output

```
Hello, World!
```

## Code Explanation

The `HelloWorld.java` file contains:

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

### Key Components

- **public class HelloWorld**: Defines a public class named HelloWorld (must match filename)
- **public static void main(String[] args)**: The main method - entry point of the Java application
- **System.out.println()**: Prints text to the console and adds a newline

## Next Steps

- Add more methods to the class
- Create additional classes
- Add command-line arguments
- Set up a build tool (Maven, Gradle)
- Add unit tests with JUnit

