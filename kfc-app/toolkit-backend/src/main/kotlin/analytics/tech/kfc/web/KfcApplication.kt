package analytics.tech.kfc.web

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.cloud.netflix.zuul.EnableZuulProxy


@EnableZuulProxy
@SpringBootApplication
class KfcApplication

fun main(args: Array<String>) {
    SpringApplication.run(KfcApplication::class.java, *args)
}