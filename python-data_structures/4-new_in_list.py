#!/usr/bin/python3
def new_in_list(my_list, idx, element):
    # Make a copy of the original list
    new_list = my_list[:]

    # If idx is negative or out of range, return a copy of the original list
    if idx < 0 or idx >= len(my_list):
        return new_list

    # Replace the element at the specified index with the new element
    new_list[idx] = element

    # Return the new list with the replaced element
    return new_list
