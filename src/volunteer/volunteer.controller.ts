/* eslint-disable prettier/prettier */
import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { VolunteerService } from './volunteer.service';
import { Volunteer } from './volunteer.entity';
import { CreateVolunteerDto } from './create-volunter-dto';

@Controller('volunteer')
export class VolunteerController {

  constructor(private readonly volunteerService: VolunteerService) { }


  @Post()
  async createDropmenu(@Body() createVolunteerDto: CreateVolunteerDto): Promise<{ message: string, volunteer: Volunteer }> {
    try {
      const volunteer = await this.volunteerService.createVolunteer(createVolunteerDto);
      return { message: 'User created successfully', volunteer };
    } catch (error) {
      throw new HttpException({ message: 'An unexpected error occurred.' }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
