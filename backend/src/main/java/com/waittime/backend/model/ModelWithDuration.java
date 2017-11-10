package com.waittime.backend.model;

public interface ModelWithDuration extends Model {
	
	int getExpected_duration();
	void setExpected_duration(int dur);
	double getAverage_duration();
	void setAverage_duration(double dur);
}
