# Door Strategy 

The primary goal of this project is to implement a flexible and extensible door system using Strategy desgin pattern. We aim to model different type of doors that can have various locking mechanism and opening behaviors, allowing these behaviors to be changed dynamically at runtime.

## Problem to Solve 
Imagine a system where you have different kind of doors:
`ExternalDoor`, `ClosetDoor`, `SafeDepositDoor`, `SlidingDoor`. Each door can:
1. Have a specific way of locking (e.g. `Password`, `Keycard`, `NonLocking`).
2. Have a specific way to opening (e.g. `Standard` swing, `Revolving`, `Sliding`).

A naive approach to might involve a lot of `if-else` statement within the `Door` class or deep inheritence hierarchies, leading to code that is hard to maintain, extend and test. Adding a new locking mechanism or opening behavior would require modifying exetending existing classes, viokating the Open/Closed Principle.

## Solution: The Strategy Pattern 
The Strategy Pattern allows us to define a family of algorithms (or functions), encapsulates each one, and make them interchangable. This lets the algorithm very independetly from clients that use it.

In our door system:
- **Context**: The `Door` class will in our context. It will hold reference to strategy objects.
- **Strategy Interfaces**: We'll define `Lockable` (for locking/unlocking behavior) and `Openable` (for opening/closing behavior).
- **Concrete Strategies**:
  - For `Lockable`: `Password`, `NonLocking`, `Keycard`
  - For `Openable`: `Standard`, `Resolving`, `Sliding`

The `Door` class will delegate the  `lock`, `unlock`, `open`, and `close` operations to its current strategy objects. This allows us to:
- Easily add new locking or opening mechanisms without alerting the `Door` class or other existing strategies:
  - Change a door's locking or opening behavior at runtime.


