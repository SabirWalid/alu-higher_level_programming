#!/usr/bin/python3
def square_matrix_simple(matrix=[]):
    # Create a new matrix of same size as input matrix with all elements initialized to 0
    result = [[0 for j in range(len(matrix[0]))] for i in range(len(matrix))]
    
    # Iterate over the input matrix and compute the square of each integer
    # Store the result in the corresponding location in the new matrix
    for i in range(len(matrix)):
        for j in range(len(matrix[0])):
            result[i][j] = matrix[i][j] ** 2
    
    return [[element * element for element in row] for row in matrix]t
