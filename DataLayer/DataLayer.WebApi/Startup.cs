using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace DataLayer.WebApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSingleton<Interfaces.IRepository, Repository.Memory.MemoryRepository>();
            services.AddCors(setup =>
            {
                setup.AddPolicy("allow", pol =>
                {
                    pol.AllowAnyOrigin();
                });
            });
            services.AddControllers();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors("allow");
            app.UseStaticFiles();
            app.UseRouting();
            app.UseEndpoints(eps =>
            {          
                eps.MapControllers();
            });
        }
    }
}
