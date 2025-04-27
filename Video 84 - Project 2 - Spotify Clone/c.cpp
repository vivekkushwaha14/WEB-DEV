#include <iostream>
using namespace std;
struct Node {
int data;
Node* next;
};
int main() {
Node* head = nullptr;
Node* temp;
Node* newNode;
// Inserting nodes at the end
for (int i = 1; i <= 3; i++) {
newNode = new Node();
newNode->data = i * 10;
newNode->next = nullptr;
if (head == nullptr) {
head = newNode;
} else {
temp = head;
while (temp->next != nullptr) {
temp = temp->next;
}
temp->next = newNode;
}
}
// Display the list
temp = head;
cout << "Linked List: ";
while (temp != nullptr) {
cout << temp->data << " -> ";
temp = temp->next;
}
cout << "nullptr" << endl;
// Deleting a node from the end
if (head != nullptr) {
if (head->next == nullptr) {
delete head;
head = nullptr;
} else {
temp = head;
while (temp->next->next != nullptr) {
temp = temp->next;
}
delete temp->next;
temp->next = nullptr;
}
}
// Display the list after deletion
temp = head;
cout << "After deletion: ";
while (temp != nullptr) {
cout << temp->data << " -> ";
temp = temp->next;
}
cout << "nullptr" << endl;
return 0;
}