﻿# Catalog-Navneet

This project is an implementation of **Shamir's Secret Sharing algorithm** using **Lagrange interpolation** to find the constant term (secret) of a polynomial. 

Given a set of roots (x, y) provided in a JSON file with different numeric bases (e.g., base 2, base 10, etc.), the task is to decode the y-values, reconstruct the polynomial using Lagrange interpolation, and extract the constant term (c) of the polynomial, which represents the "secret."

### Key Features:
1. **Reads Test Case Data**: The program reads polynomial roots and their respective bases from JSON files.
2. **Decodes y-values**: The y-values are encoded in different numeric bases, and the program decodes them into decimal.
3. **Lagrange Interpolation**: The program uses Lagrange interpolation to reconstruct the polynomial.
4. **Finds the Secret**: The constant term of the polynomial (secret) is calculated by evaluating the polynomial at `x = 0`.

### Usage:
- The user provides two JSON test case files containing the roots of the polynomial.
- The program decodes the roots, performs the interpolation, and outputs the secret key for both test cases.

This project demonstrates how to work with polynomial interpolation, base conversions, and secret sharing algorithms.
