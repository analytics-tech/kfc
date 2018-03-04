package analytics.tech.kfc.timeService

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

@RestController
@RequestMapping("/api")
@SpringBootApplication
class TimeApplication {

    @GetMapping("/now")
    fun currentTime() =
        LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME)

}

fun main(args: Array<String>) {
    SpringApplication.run(TimeApplication::class.java, *args)
}