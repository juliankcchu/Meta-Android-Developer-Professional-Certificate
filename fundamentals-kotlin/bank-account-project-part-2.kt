/**
 * You can edit, run, and share this code.
 * play.kotlinlang.org
 */
var accountBalance = (1..1000).random()

fun main() {
    println("The current balance is $accountBalance dollars.")
    
    val money = (1..1000).random()
    println("The amount you transferred is $money dollars.")
    
    var output = 0
    
    withdraw(money)
}

fun withdraw(amount: Int): Int {
    accountBalance -= amount
	println("You successfully withdrew $amount dollars.")
    println("The current balance is $accountBalance dollars.")
    return amount
}

fun deposit(amount: Int): Int {
    accountBalance += amount
    return amount
}
