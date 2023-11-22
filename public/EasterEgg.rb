
class Calculator
  def add(a, b)
    a + b
  end

  def subtract(a, b)
    a - b
  end

  def multiply(a, b)
    a * b
  end

  def divide(a, b)
    a / b
  end
end

# Example usage:
calculator = Calculator.new
result = calculator.add(5, 3)
puts result

puts "Hello, world!"
