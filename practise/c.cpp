#include <iostream>
using namespace std;

class Animal {
public:
    virtual void sound() {
        cout << "Animal makes a sound" << endl;
    }
};

class Dog : public Animal {
public:
    void sound() override {
        cout << "Dog barks" << endl;
    }
};

int main() {
    Animal* a;     // Pointer of base class
    Dog d;
    d.sound();
    a = &d;        // Pointing to derived class object
    a->sound();    // Calls Dog's sound() at runtime            
    // a = &d;        // Pointing to derived class object
    // a->sound();    // Calls Dog's sound() at runtime

    return 0;
}
