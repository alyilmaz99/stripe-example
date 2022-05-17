using System;
using Stripe;
namespace stripeExample
{
    class Program
    {
        static void Main(string[] args){
            

            StripeConfiguration.ApiKey="sk_test_51Kyex0F4m0MKLar222Hi5t9qotB1pannBxt6FWPwzErbTHcC9TDRKRQxsZzvVm3BVHOgzdSiv6FC1zwRZxrozlIN00RWEHPvAr";
            var service = new CustomerService();
            var customers = service.List();
            Console.WriteLine(customers);
        }
    }
}