// ==========================================
// ১. Basic Types (বেসিক টাইপস)
// ==========================================

// string: টেক্সটের জন্য
let myName: string = "Sahadat Hossen";
let description: string = 'TypeScript শেখা অনেক সহজ!';

// number: সংখ্যা (পূর্ণসংখ্যা বা দশমিক) এর জন্য
let age: number = 25;
let piValue: number = 3.1416;

// boolean: true অথবা false এর জন্য
let isLearningTS: boolean = true;
let isJSDifficult: boolean = false;

// array: একই ধরনের ডেটার তালিকার জন্য
// string টাইপের অ্যারে
let techStack: string[] = ["HTML", "CSS", "JavaScript", "TypeScript"];

// number টাইপের অ্যারে
let luckyNumbers: number[] = [7, 13, 21, 99];


// ==========================================
// ২. Type Annotation (টাইপ অ্যানোটেশন)
// ==========================================
// এখানে আমরা ম্যানুয়ালি কোলন (:) দিয়ে টাইপ ঠিক করে দিচ্ছি।

let productPrice: number; // ডিক্লেয়ারেশন
productPrice = 1200;      // অ্যাসাইনমেন্ট (শুধুমাত্র সংখ্যা নেওয়া সম্ভব)
// productPrice = "1200"; // ভুল! (এরর দেখাবে)

// ফাংশন প্যারামিটার এবং রিটার্ন টাইপ অ্যানোটেশন
function calculateTotal(price: number, discount: number): number {
    return price - discount;
}

let finalAmount: number = calculateTotal(1000, 150);
console.log(`Final Price: ${finalAmount}`);


// ==========================================
// ৩. Type Inference (টাইপ ইনফ্যারেন্স)
// ==========================================
// এখানে আমরা কোনো টাইপ উল্লেখ করিনি, কিন্তু TypeScript নিজে থেকেই বুঝে নিয়েছে।

let greetingMessage = "শুভ সকাল!"; // TS ধরে নিয়েছে এটি string টাইপ
// greetingMessage = 42; // ভুল! (TS এরর দেবে কারণ greetingMessage একটি string)

let viewCount = 150; // TS ধরে নিয়েছে এটি number টাইপ
// viewCount = "one hundred"; // ভুল!

console.log(`Greeting: ${greetingMessage}, Views: ${viewCount}`);
