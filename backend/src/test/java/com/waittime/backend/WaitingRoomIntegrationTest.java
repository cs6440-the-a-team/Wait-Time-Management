package com.waittime.backend;

import static org.junit.Assert.*;

import javax.ws.rs.client.ClientBuilder;

import org.junit.Test;

public class WaitingRoomIntegrationTest {

	private static String WAITING_ROOM_URL = "http://localhost:8082/waitingroom";

	@Test
	public void testWaitingRooom() throws Exception {
		String response = ClientBuilder.newClient()
							.target(WAITING_ROOM_URL)
							.request()
							.get(String.class);

		assertEquals(response, "world!");
	}
}
