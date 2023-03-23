#!/usr/bin/python3
"""Inherits BaseGeometry class documented now"""


BaseGeometry = __import__('7-base_geometry').BaseGeometry
    """Task based on 8-rectangle.py"""


class Rectangle(BaseGeometry):
    """Class Rectangle that inherits from BaseGeometry"""

    def __init__(self, width, height):
        """Initialize data."""
        self.integer_validator("width", width)
        self.__width = width
        self.integer_validator("height", height)
        self.__height = height

    def __str__(self):
        """Returns [Rectangle] <width>/<height>."""

        return str("[Rectangle] {}/{}".format(self.__width, self.__height))

    def area(self):
        """Area of rectangle"""

        return self.__width * self.__height
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricin
