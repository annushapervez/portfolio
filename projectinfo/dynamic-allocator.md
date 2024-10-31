---
title: "Dynamic Memory Allocator"
slug: "dynamic-allocator"
summary: "A Unix-compatible memory allocator using multiple memory pools and bulk allocation, designed to replace malloc() in C programs with pool- and OS-based allocations."
githubLink:  "https://github.com/annushapervez/dynamic-allocator"

---
## Overview
This project implements a dynamic memory allocator as an alternative to `malloc()` in Unix processes. Through multiple fixed-size memory pools, this allocator manages memory efficiently for small allocations, while handling larger requests via bulk allocations directly from the OS. The allocator’s design aims to allow Unix binaries to run using this custom memory management system, offering insights into low-level memory manipulation and allocation strategies.

### Key Concepts
Dynamic memory allocators manage heap memory in a process, enabling flexible memory usage beyond compile-time allocation. This allocator uses a pool-based strategy to allocate blocks from pre-defined pools or chunks of memory. If an allocation is too large, it falls back to the OS using `bulk_alloc()`.

### Memory Pools
Memory pools are set up to allocate chunks from 32 bytes to 4096 bytes. These pools cater to small allocation requests efficiently, while larger allocations bypass pools and directly use the OS allocator, `bulk_alloc()`.

## Project Goals
- **📦 Efficient Small Allocations**: Use memory pools to handle requests for allocations up to 4096 bytes.
- **🏗️ Large Allocation Support**: Handle large memory requests using OS-level allocations for sizes beyond 4096 bytes.
- **🔧 Dynamic Resizing and Deallocation**: Support `realloc()` and `free()` for memory resizing and deallocation.
- **🔒 Data Integrity and Safety**: Manage memory and pointer manipulation with header structures and bitwise operations for proper allocation and freeing.

## Key Functions
- **`malloc()`**: Allocates memory by finding the smallest free block in the corresponding pool or by requesting memory from the OS for larger allocations. Pool allocations are optimized based on block size.
- **`calloc()`**: Allocates memory like `malloc()` but initializes all bytes to zero using `memset()`. Pool or OS allocation is determined based on size.
- **`realloc()`**: Resizes an existing memory block, preserving data. If the block is too small, reallocates memory to accommodate the requested size, copying the original data to the new location.
- **`free()`**: Releases allocated memory. For pool allocations, it returns the block to the free list; for OS-allocated blocks, it uses `bulk_free()` to release memory back to the system.
- **`bulk_alloc()`**: Requests a contiguous memory region from the OS. Used when pool allocation cannot satisfy the requested memory size.

## Tech Stack
- **Language**: C for low-level memory manipulation and pointer operations.
- **Allocation Strategy**: Pool and bulk allocation combined for maximum flexibility.
- **Memory Management**: `header` struct ensures metadata consistency, tracking block size and availability.
- **OS Integration**: `sbrk()` and `bulk_alloc()` interfaces manage memory outside standard libraries.

## Features 🌟
### Memory Management
- **Multi-pool Strategy**: Pools ranging from 32 bytes up to 4096 bytes for allocation efficiency.
- **OS-based Fallback**: Direct allocation from the OS for large memory requests.
- **Free Lists**: Each pool maintains a free list to track available blocks for allocation.

### Header Structure
A `header` struct precedes each allocation, storing the block’s size, pointer to the current memory location, and link to the next free block (if applicable).

### Block Sizing
- **`CHUNK_SIZE`**: Allocations from the OS occur in increments of `CHUNK_SIZE` (4 KB).
- **Dynamic Block Calculation**: A `block_index()` function computes the best-fit pool based on the request size, optimizing memory usage.

### Performance Optimization
Utilizes bitwise operations and direct memory manipulation through `sbrk()` to control memory allocation and optimize performance, allowing Unix binaries to operate with this custom allocator.
