#!/usr/bin/python3
"""
A class 'Rectangle' that defines a rectangle by: (based on 0-rectangle.py
"""


class Rectangle:
    """Creates a rectangle."""

    def __init__(self, width=0, height=0):
        """Initialize data."""
        self.width = width
        self.height = height

    @property
    def width(self):
        """Retrieves the width."""
        return self.__width

    @width.setter
    def width(self, value):
        """Set the width of a Rectangle instance
        Args:
            value: value of width, must be >=0
        """
        if not isinstance(value, int):
            raise TypeError("width must be an integer")
        elif value < 0:
            raise ValueError("width must be >= 0")
        else:
            self.__width = value

    @property
    def height(self):
        """Retrieves the height."""
        return self.__height

    @height.setter
    def height(self, value):
        """Set the height of a Rectangle instance
        Args:
            value: value of height, must be >=0
        """
        if not isinstance(value, int):
            raise TypeError("height must be an integer")
        elif value < 0:
            raise ValueError("height must be >= 0")
        else:
            self.__height = value
