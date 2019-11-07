using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RouteInfoGenerator
{
    class Program
    {
        private static bool shouldContinue = true;
        private static GeneratorConfig config;
        internal static InfoGenerator generator;

        static void Main(string[] args)
        {
            // This line is important: we may need to print Chinese characters.
            Console.OutputEncoding = System.Text.Encoding.UTF8;
            // Beginning of program.
            Console.WriteLine("Launching Route Info Generator.");
            config = new GeneratorConfig();
            Console.WriteLine("-----------------------------------------------");
            Console.WriteLine("Project Pathfinder: Route Information Geneartor");
            Console.WriteLine("-----------------------------------------------");
            while (shouldContinue)
            {
                HandleCommand();
            }
            ClassicPause();
        }

        public static void FlushInput()
        {
            while (Console.KeyAvailable)
            {
                Console.ReadKey(false);
            }
        }

        public static void ClassicPause()
        {
            FlushInput();
            Console.WriteLine("Press any key to continue...");
            Console.ReadKey();
        }

        private static void HandleCommand()
        {
            Console.Write("> ");
            FlushInput();
            string rawInput = Console.ReadLine();

            // Split command
            string[] command = rawInput.Split(' ');
            switch (command[0])
            {
                case "exit":
                    Environment.Exit(0);
                    break;
                case "help":
                    DisplayHelpMessage();
                    break;
                case "reload":
                    Console.WriteLine("Reloading configuration...");
                    config = new GeneratorConfig();
                    break;
                case "generate":
                    generator = new InfoGenerator(config);
                    if (generator.IsValid)
                    {
                        Console.WriteLine("[RIG] All components ready.");
                        Console.WriteLine("[RIG] Bus Route TS will be exported to: " + config.ExportLoc_BusRoutes);
                        Console.WriteLine("[RIG] Waypoint TS will be exported to: " + config.ExportLoc_Waypoints);
                        Console.WriteLine("[RIG] Type in the command once more as confirmation.");
                        FlushInput();
                        if (Console.ReadLine() == "generate")
                        {
                            Console.WriteLine("[RIG] Operation confirmed.");
                            generator.GenerateFiles();
                        }
                        else
                        {
                            Console.WriteLine("[RIG] Operation cancelled.");
                        }
                    }
                    break;
                default:
                    Console.WriteLine("Unknown command. Type \"help\" for a list of commands.");
                    break;
            }
        }

        private static void DisplayHelpMessage()
        {
            Console.WriteLine("Command help:");
            Console.WriteLine("help: Displays this message.");
            Console.WriteLine("exit: Terminates this console.");
            Console.WriteLine("reload: Reloads the configuration file.");
            Console.WriteLine("generate: Starts the entire info-generation process.");
        }
    }
}
