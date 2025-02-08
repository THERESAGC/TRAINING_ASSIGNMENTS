
// Advanced typescript problems

// Beginner Real-World TypeScript Exercises
// 1. User Profile Management
// Q1: Define an interface User with properties id, name, email, and isAdmin (boolean).
interface User {    
    id: number;
    name: string;
    email: string;
    isAdmin: boolean;
}

// Q2: Create a function getUserInfo(user: User): string that returns user details in a formatted string.
function getUserInfo(user: User): string {
    return `User ${user.name} has id ${user.id} and email ${user.email}.`;
}
// Q3: Write a function isAdmin(user: User): boolean that checks if a user is an admin.
function isAdmin(user: User): boolean {
    return user.isAdmin;
}
// 2. Product Inventory System (E-commerce Example)
// Q4: Create a Product interface with id, name, price, and inStock properties.
interface Product {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
}
// Q5: Write a function getTotalValue(products: Product[]): number that returns the total value of all products in stock.
function getTotalValue(products: Product[]): number {
    return products.reduce((acc, product) => {
        return product.inStock ? acc + product.price : acc;
    }, 0);
}

// Q6: Implement a function filterInStock(products: Product[]): Product[] to return only available products.
function filterInStock(products: Product[]): Product[] {
    return products.filter(product => product.inStock);
}

// 3. Order Processing System
// Q7: Define a Customer interface with id, name, and email.
interface Customer {
    id: number;
    name: string;
    email: string;
}
// Q8: Create an Order interface with orderId, customerId, items: Product[], and totalAmount.
interface Order {
    orderId: number;
    customerId: number;
    items: Product[];
    totalAmount: number;
}
// Q9: Write a function calculateTotal(order: Order): number that calculates the total amount based on product prices.
function calculateTotal(order: Order): number {
    return order.items.reduce((acc, product) => acc + product.price, 0);
}

// 4. Authentication System (Login & Signup)
// Q10: Create a type alias AuthCredentials with email and password properties.
type AuthCredentials = {
    email: string;
    password: string;
}
// Q11: Write a function login(credentials: AuthCredentials): boolean that validates email and password format.
function login(credentials: AuthCredentials): boolean {
    const { email, password } = credentials;
    return email.includes('@') && password.length >= 6;
}
// Q12: Create a function generateAuthToken(userId: number): string that returns a dummy token (e.g., "user_12345_token").
function generateAuthToken(userId: number): string {
    return `user_${userId}_token`;
}
// 5. API Fetching & Data Handling
// Q13: Write a function fetchUsers(): Promise<User[]> that fetches users from https://jsonplaceholder.typicode.com/users using fetch().
async function fetchUsers(): Promise<User[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json();
}


// Q14: Implement fetchUserById(id: number): Promise<User> to fetch a single user.
async function fetchUserById(id: number): Promise<User> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.json();
}
// Q15: Define an interface Post with properties userId, id, title, and body.
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}
