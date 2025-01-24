#include <iostream>

// Exception classes
class OverflowException {};
class UnderflowException {};

template <typename T>
class Stack {
private:
    T* data;
    int capacity;
    int top;

public:
    // Constructor
    Stack(int capacity) : capacity(capacity), top(-1) {
        data = new T[capacity];
    }

    // Destructor
    ~Stack() {
        delete[] data;
    }

    // Push method
    void push(const T& item) {
        if (top == capacity - 1) {
            throw OverflowException();
        }
        data[++top] = item;
    }

    // Pop method
    T pop() {
        if (isEmpty()) {
            throw UnderflowException();
        }
        return data[top--];
    }

    // Peek method
    T peek() const {
        if (isEmpty()) {
            throw UnderflowException();
        }
        return data[top];
    }

    // Check if stack is empty
    bool isEmpty() const {
        return top == -1;
    }
};

int main() {
    try {
        Stack<int> intStack(5);
        intStack.push(1);
        intStack.push(2);
        intStack.push(3);

        while (!intStack.isEmpty()) {
            std::cout << intStack.pop() << " ";
        }
        std::cout << std::endl;

        Stack<char> charStack(3);
        charStack.push('a');
        charStack.push('b');
        charStack.push('c');

        while (!charStack.isEmpty()) {
            std::cout << charStack.pop() << " ";
        }
        std::cout << std::endl;

        // Uncomment the following line to test overflow
        // intStack.push(5);
    } catch (const OverflowException&) {
        std::cerr << "Overflow Exception: Stack is full." << std::endl;
    } catch (const UnderflowException&) {
        std::cerr << "Underflow Exception: Stack is empty." << std::endl;
    }

    return 0;
}
